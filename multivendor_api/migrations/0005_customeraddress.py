# Generated by Django 5.0.7 on 2024-11-22 22:03

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('multivendor_api', '0004_alter_order_customer_orderitems_delete_orderitem'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomerAddress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address', models.TextField()),
                ('Customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_addresses', to='multivendor_api.customer')),
            ],
        ),
    ]