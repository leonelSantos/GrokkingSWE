# Generated by Django 3.1 on 2022-05-21 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LeetCode',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('questionName', models.CharField(max_length=100)),
                ('video', models.URLField()),
                ('question', models.URLField()),
                ('explanation', models.CharField(max_length=1000)),
            ],
        ),
    ]