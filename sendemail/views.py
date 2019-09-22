from django.shortcuts import render

# Create your views here.
# sendemail/views.py
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import ContactForm

import logging, os, json

from django.views.generic import View
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt

class FrontendAppView(View):

    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'build', 'foo.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                """
                This URL is only used when you have built the production
                version of the app. Visit http://localhost:3000/ instead, or
                run `yarn run build` to test the production version.
                """,
                status=501,
            )

@csrf_exempt
def emailView(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        email = json_data['email']
        subject = json_data['subject']
        message = json_data['message']

        send_mail(subject, message, email, ['mk9917@ucla.edu'])
        return HttpResponse("Message Successfully Sent")
    else:
        return render(request, "email.html")

def successView(request):
    return HttpResponse('Success! Thank you for your message.')
