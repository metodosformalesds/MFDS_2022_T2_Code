# Generated by Django 4.1.3 on 2022-11-19 04:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0003_alter_profile_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='content',
            new_name='description',
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='imagen.jpg', upload_to=''),
        ),
    ]
