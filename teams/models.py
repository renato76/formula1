from django.db import models
# from drivers.models import Driver

class Team(models.Model):
    name = models.CharField(max_length=50)
    team_logo = models.CharField(max_length=300)
    car_image = models.CharField(max_length=300)

    def __str__(self):
        return f'{self.id} - {self.name}'


