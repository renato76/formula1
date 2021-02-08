from django.db import models
from drivers.models import Driver

class Team(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.id} - {self.name}'

        
