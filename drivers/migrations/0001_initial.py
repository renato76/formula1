# Generated by Django 3.1.5 on 2021-01-19 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('driver_number', models.PositiveIntegerField(max_length=5, unique=True)),
                ('team', models.CharField(max_length=20)),
                ('points', models.PositiveIntegerField(max_length=5)),
                ('image', models.CharField(max_length=100)),
                ('flag', models.CharField(max_length=100)),
                ('country', models.CharField(max_length=30)),
                ('podiums', models.PositiveIntegerField(max_length=5)),
                ('points_to_date', models.PositiveIntegerField(max_length=5)),
                ('world_championships', models.PositiveIntegerField(max_length=3)),
            ],
        ),
    ]