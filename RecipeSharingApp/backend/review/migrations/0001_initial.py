# Generated by Django 4.2.3 on 2023-07-13 23:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='review',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('userId', models.CharField(max_length=20, unique=True)),
                ('reviewId', models.CharField(max_length=50, unique=True)),
                ('dishId', models.CharField(max_length=20, unique=True)),
                ('rating', models.IntegerField(choices=[(1, 'One'), (2, 'Two'), (3, 'Three'), (4, 'Four'), (5, 'Five')], default=1)),
                ('content', models.CharField(max_length=200)),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
