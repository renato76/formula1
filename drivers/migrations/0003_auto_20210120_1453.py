# Generated by Django 3.1.5 on 2021-01-20 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drivers', '0002_auto_20210119_2341'),
    ]

    operations = [
        migrations.AlterField(
            model_name='driver',
            name='podiums',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='driver',
            name='points',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='driver',
            name='points_to_date',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='driver',
            name='world_championships',
            field=models.PositiveIntegerField(),
        ),
    ]
