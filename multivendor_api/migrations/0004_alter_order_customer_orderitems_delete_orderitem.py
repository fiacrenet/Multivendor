# Generated by Django 5.0.7 on 2024-11-20 22:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('multivendor_api', '0003_customer_order_orderitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_orders', to='multivendor_api.customer'),
        ),
        migrations.CreateModel(
            name='OrderItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='multivendor_api.order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='multivendor_api.product')),
            ],
        ),
        migrations.DeleteModel(
            name='OrderItem',
        ),
    ]
