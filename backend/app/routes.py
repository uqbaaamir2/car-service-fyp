from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from .auth import authenticate_admin, require_admin
from .crud import create_expense, create_inventory_item, create_public_order, create_team_member, get_pnl, update_order
from .database import get_db
from .models import Customer, Expense, InventoryItem, OrderStatus, ServiceOrder, TeamMember
from .schemas import (
    CustomerCreate,
    CustomerRead,
    DashboardSummary,
    ExpenseCreate,
    ExpenseRead,
    InventoryItemCreate,
    InventoryItemRead,
    OrderRead,
    OrderStatus as OrderStatusSchema,
    OrderUpdate,
    PNLResponse,
    PublicOrderCreate,
    TeamMemberCreate,
    TeamMemberRead,
)

public_router = APIRouter(prefix="/api/public", tags=["public"])
admin_router = APIRouter(prefix="/api/admin", tags=["admin"])


@public_router.post("/orders", response_model=OrderRead)
def create_order(payload: PublicOrderCreate, db: Session = Depends(get_db)):
    try:
        return create_public_order(db, payload)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc


@admin_router.post("/auth/login")
def admin_login(payload: dict):
    token = authenticate_admin(payload.get("username", ""), payload.get("password", ""))
    if token is None:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"access_token": token, "token_type": "bearer"}


@admin_router.get("/auth/me")
def admin_me(_: str = Depends(require_admin)):
    return {"is_admin": True}


@admin_router.get("/customers", response_model=list[CustomerRead])
def list_customers(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return db.query(Customer).order_by(Customer.created_at.desc()).all()


@admin_router.get("/orders", response_model=list[OrderRead])
def list_orders(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return db.query(ServiceOrder).order_by(ServiceOrder.created_at.desc()).all()


@admin_router.patch("/orders/{order_id}", response_model=OrderRead)
def patch_order(order_id: int, payload: OrderUpdate, db: Session = Depends(get_db), _: str = Depends(require_admin)):
    order = db.get(ServiceOrder, order_id)
    if order is None:
        raise HTTPException(status_code=404, detail="Order not found")
    return update_order(db, order, payload)


@admin_router.get("/team-members", response_model=list[TeamMemberRead])
def list_team_members(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return db.query(TeamMember).order_by(TeamMember.created_at.desc()).all()


@admin_router.post("/team-members", response_model=TeamMemberRead)
def add_team_member(payload: TeamMemberCreate, db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return create_team_member(db, payload)


@admin_router.get("/inventory", response_model=list[InventoryItemRead])
def list_inventory(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return db.query(InventoryItem).order_by(InventoryItem.created_at.desc()).all()


@admin_router.post("/inventory", response_model=InventoryItemRead)
def add_inventory(payload: InventoryItemCreate, db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return create_inventory_item(db, payload)


@admin_router.get("/expenses", response_model=list[ExpenseRead])
def list_expenses(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return db.query(Expense).order_by(Expense.created_at.desc()).all()


@admin_router.post("/expenses", response_model=ExpenseRead)
def add_expense(payload: ExpenseCreate, db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return create_expense(db, payload)


@admin_router.get("/pnl", response_model=PNLResponse)
def read_pnl(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    return get_pnl(db)


@admin_router.get("/dashboard", response_model=DashboardSummary)
def dashboard_summary(db: Session = Depends(get_db), _: str = Depends(require_admin)):
    pnl = get_pnl(db)
    customers = db.query(Customer).count()
    orders = db.query(ServiceOrder).count()
    pending_orders = db.query(ServiceOrder).filter(ServiceOrder.status == OrderStatus.pending).count()
    in_progress_orders = db.query(ServiceOrder).filter(ServiceOrder.status == OrderStatus.in_progress).count()
    completed_orders = db.query(ServiceOrder).filter(ServiceOrder.status == OrderStatus.completed).count()
    return {
        "customers": customers,
        "orders": orders,
        "pending_orders": pending_orders,
        "in_progress_orders": in_progress_orders,
        "completed_orders": completed_orders,
        **pnl,
    }
