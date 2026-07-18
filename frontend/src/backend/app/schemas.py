from datetime import datetime
from enum import Enum
from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ServiceType(str, Enum):
    home = "home"
    mobile = "mobile"


class OrderStatus(str, Enum):
    pending = "pending"
    in_progress = "in-progress"
    completed = "completed"


class TeamRole(str, Enum):
    mechanic = "mechanic"
    electrician = "electrician"
    car_wash = "car-wash"


class InventoryCategory(str, Enum):
    oil = "oil"
    air_filter = "air-filter"
    oil_filter = "oil-filter"


class CustomerBase(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    phone_number: str = Field(min_length=7, max_length=30)
    email: Optional[EmailStr] = None
    location: Optional[str] = None


class CustomerCreate(CustomerBase):
    pass


class CustomerRead(CustomerBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class PublicOrderCreate(BaseModel):
    customer_name: str = Field(min_length=2, max_length=150)
    phone_number: str = Field(min_length=7, max_length=30)
    email: Optional[EmailStr] = None
    service_type: ServiceType
    service_subcategory: str = Field(min_length=2, max_length=100)
    location: str = Field(min_length=2)
    notes: Optional[str] = None


class OrderBase(BaseModel):
    service_type: ServiceType
    service_subcategory: str
    location: str
    status: OrderStatus = OrderStatus.pending
    collected_amount: float = 0
    notes: Optional[str] = None
    assigned_team_member_id: Optional[int] = None


class OrderUpdate(BaseModel):
    status: Optional[OrderStatus] = None
    collected_amount: Optional[float] = None
    notes: Optional[str] = None
    assigned_team_member_id: Optional[int] = None


class OrderRead(OrderBase):
    id: int
    customer_id: int
    created_at: datetime
    updated_at: datetime
    customer: CustomerRead

    model_config = {"from_attributes": True}


class TeamMemberBase(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    role: TeamRole
    phone_number: Optional[str] = None
    is_active: bool = True


class TeamMemberCreate(TeamMemberBase):
    pass


class TeamMemberRead(TeamMemberBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class InventoryItemBase(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    category: InventoryCategory
    quantity: float = 0
    unit: str = "pcs"
    cost_per_unit: float = 0


class InventoryItemCreate(InventoryItemBase):
    pass


class InventoryItemRead(InventoryItemBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class ExpenseBase(BaseModel):
    title: str = Field(min_length=2, max_length=150)
    amount: float
    category: Optional[str] = None


class ExpenseCreate(ExpenseBase):
    pass


class ExpenseRead(ExpenseBase):
    id: int
    created_at: datetime

    model_config = {"from_attributes": True}


class PNLResponse(BaseModel):
    revenue: float
    expenses: float
    profit: float


class DashboardSummary(BaseModel):
    customers: int
    orders: int
    pending_orders: int
    in_progress_orders: int
    completed_orders: int
    revenue: float
    expenses: float
    profit: float
