from rest_framework import serializers
from api.models import KickstarterCampaign

# This serializer calls on Django's ModelSerializer to break the campaigns into its 5 fields 

class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = KickstarterCampaign
        fields = ['id','backers','blurb','pledged','created']
