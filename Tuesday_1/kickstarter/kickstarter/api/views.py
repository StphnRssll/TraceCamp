from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import KickstarterCampaign
from api.serializers import ApiSerializer

# Below I've created 2 view functions that take a web request and return a web response. They are for kickstarter campaigns

@csrf_exempt 
def campaign_list(request):
    # "list" function handles requests for the url associated with the entire table
    if request.method == 'GET':
        campaigns = KickstarterCampaign.objects.all()
        serializer = ApiSerializer(campaigns,many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ApiSerializer(data=data) 
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def campaign_detail(request, id):
    # "detail" function handles requests for the url for a given specific row of the table
    try:
        campaign = KickstarterCampaign.objects.get(pk=id)
    except KickstarterCampaign.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ApiSerializer(campaign)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ApiSerializer(campaign,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        campaign.delete()
        return HttpResponse(status=204)
