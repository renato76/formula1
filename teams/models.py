from django.db import models

class Team(models.Model):
    name = models.CharField(max_length=50)
    full_team_name = models.CharField(max_length=50)
    team_logo = models.CharField(max_length=300)
    car_image = models.CharField(max_length=300)
    base = models.CharField(max_length=300)
    team_chief = models.CharField(max_length=300)
    technical_chief = models.CharField(max_length=300)
    chassis = models.CharField(max_length=300)
    power_unit = models.CharField(max_length=300)
    first_team_entry = models.PositiveIntegerField() 
    world_championships = models.PositiveIntegerField() 
    pole_positions = models.PositiveIntegerField() 
    fastest_laps = models.PositiveIntegerField() 
    team_profile = models.CharField(max_length=3000)

    def __str__(self):
        return f'{self.id} - {self.name}'


