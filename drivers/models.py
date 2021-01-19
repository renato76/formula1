from django.db import models

class Driver(models.Model):

    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    driver_number = models.CharField(max_length=5)
    team = models.CharField(max_length=25)
    points = models.CharField(max_length=5)
    image = models.CharField(max_length=100)
    flag = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name} {self.surname}'