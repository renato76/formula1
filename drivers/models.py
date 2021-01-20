from django.db import models

class Driver(models.Model):
    firstname = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    driver_number = models.PositiveIntegerField(unique=True)
    team = models.CharField(max_length=20)
    points = models.PositiveIntegerField()
    image = models.CharField(max_length=100)
    flag = models.CharField(max_length=100)
    country = models.CharField(max_length=30)
    podiums = models.PositiveIntegerField()
    points_to_date = models.PositiveIntegerField()
    world_championships = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.firstname} {self.surname}'