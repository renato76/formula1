# Generated by Django 3.1.5 on 2021-02-08 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='car_image',
            field=models.CharField(default=1, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='team',
            name='team_logo',
            field=models.CharField(default=1, max_length=300),
            preserve_default=False,
        ),
    ]