# Generated by Django 3.1.5 on 2021-01-19 23:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='driver',
            name='driver_number',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]