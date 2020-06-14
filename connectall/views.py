from django.views.generic import TemplateView

class Home(TemplateView):
    template_name = 'index.html'

class About(TemplateView):
    template_name = 'about_us.html'

class Pricing(TemplateView):
    template_name = 'pricing.html'
