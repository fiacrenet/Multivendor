# Generated by Django 5.0.7 on 2024-11-22 23:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('multivendor_api', '0008_productrating'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productrating',
            old_name='Customer',
            new_name='customer',
        ),
    ]
