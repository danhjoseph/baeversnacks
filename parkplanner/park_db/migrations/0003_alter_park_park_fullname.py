# Generated by Django 4.1.2 on 2022-10-08 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("park_db", "0002_auto_20221008_0013"),
    ]

    operations = [
        migrations.AlterField(
            model_name="park",
            name="park_fullname",
            field=models.CharField(blank=True, max_length=512),
        ),
    ]