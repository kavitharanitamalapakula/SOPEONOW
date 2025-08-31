import json
import os
from django.shortcuts import render
from django.conf import settings

def report_view(request):
    json_file_path = os.path.join(settings.MEDIA_ROOT, 'reporting_data.json')
    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)
    return render(request, 'reporting/reporting_dashboard.html', {'jsonData': data})
