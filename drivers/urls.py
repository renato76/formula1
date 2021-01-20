from django.urls import path
from .views import DriversListView, DriverDetailView

urlpatterns = [
    path('', DriversListView.as_view()),
    path('<int:pk>/', DriverDetailView.as_view())
]