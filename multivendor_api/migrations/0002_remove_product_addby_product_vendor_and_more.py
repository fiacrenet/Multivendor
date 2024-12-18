# Generated by Django 5.0.7 on 2024-10-31 20:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('multivendor_api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='addby',
        ),
        migrations.AddField(
            model_name='product',
            name='vendor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='multivendor_api.vendor'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='multivendor_api.productcategory'),
        ),
    ]
