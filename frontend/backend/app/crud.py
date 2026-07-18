from sqlalchemy import func
from sqlalchemy.orm import Session

from .models import Customer, Expense, InventoryItem, OrderStatus, ServiceOrder, TeamMember
from .schemas import (
    CustomerCreate,
    ExpenseCreate,
    InventoryItemCreate,
    OrderUpdate,
    PublicOrderCreate,
    TeamMemberCreate,
)

SERVICE_SUBCATEGORIES = {
    "home": {
        "oil-change",
        "engine-tuning",
        "electrician",
        "car-repair-mechanic-service",
        "car-wash",
    },
    "mobile": {
        "car-repair-mechanic-service",
        "electrician",
    },
}


def create_customer(db: Session, customer: CustomerCreate) -> Customer:
    record = Customer(**customer.model_dump())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def create_public_order(db: Session, payload: PublicOrderCreate) -> ServiceOrder:
    if payload.service_subcategory not in SERVICE_SUBCATEGORIES[payload.service_type.value]:
        raise ValueError("Invalid service subcategory for selected service type")

    customer = Customer(
        name=payload.customer_name,
        phone_number=payload.phone_number,
        email=payload.email,
        location=payload.location,
    )
    db.add(customer)
    db.flush()

    order = ServiceOrder(
        customer_id=customer.id,
        service_type=payload.service_type,
        service_subcategory=payload.service_subcategory,
        location=payload.location,
        status=OrderStatus.pending,
        collected_amount=0,
        notes=payload.notes,
    )
    db.add(order)
    db.commit()
    db.refresh(order)
    return order


def update_order(db: Session, order: ServiceOrder, payload: OrderUpdate) -> ServiceOrder:
    data = payload.model_dump(exclude_unset=True)
    for key, value in data.items():
        setattr(order, key, value)
    db.commit()
    db.refresh(order)
    return order


def create_team_member(db: Session, payload: TeamMemberCreate) -> TeamMember:
    record = TeamMember(**payload.model_dump())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def create_inventory_item(db: Session, payload: InventoryItemCreate) -> InventoryItem:
    record = InventoryItem(**payload.model_dump())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def create_expense(db: Session, payload: ExpenseCreate) -> Expense:
    record = Expense(**payload.model_dump())
    db.add(record)
    db.commit()
    db.refresh(record)
    return record


def get_pnl(db: Session) -> dict[str, float]:
    revenue = (
        db.query(func.coalesce(func.sum(ServiceOrder.collected_amount), 0.0))
        .filter(ServiceOrder.status == OrderStatus.completed)
        .scalar()
    )
    expenses = db.query(func.coalesce(func.sum(Expense.amount), 0.0)).scalar()
    return {"revenue": float(revenue or 0), "expenses": float(expenses or 0), "profit": float((revenue or 0) - (expenses or 0))}
