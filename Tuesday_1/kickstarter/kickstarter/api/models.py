from django.db import models

# Below is the model for a campaign. Every campaign object will have the 4 traits.

class KickstarterCampaign(models.Model):
    backers = models.IntegerField()
    blurb = models.CharField(max_length=135)
    pledged = models.FloatField()
    created = models.DateTimeField(auto_now=True)