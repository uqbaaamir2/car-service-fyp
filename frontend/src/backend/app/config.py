from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Car Services API"
    environment: str = "development"
    database_url: str = "postgresql+psycopg2://postgres:postgres@localhost:5432/car_services"
    admin_username: str = "admin"
    admin_password: str = "admin123"
    admin_token: str = "car-services-admin-token"
    cors_origins: list[str] = ["http://localhost:5173", "http://localhost:5174"]

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")


settings = Settings()
