from django.db import models

class Team(models.Model):
    constructor = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.id} - {self.name}'
