# Generated by Django 3.1.5 on 2021-02-08 19:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0005_team_world_championships'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='full_team_name',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]