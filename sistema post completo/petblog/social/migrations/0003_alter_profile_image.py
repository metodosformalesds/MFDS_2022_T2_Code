# Generated by Django 4.1.3 on 2022-11-18 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0002_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='img_1.jpg', upload_to=''),
        ),
    ]