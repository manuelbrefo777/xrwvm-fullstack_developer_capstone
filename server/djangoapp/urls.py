# Uncomment the imports before you add the code
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView # Ensure this import exists
# from . import views

app_name = 'djangoapp'
urlpatterns = [
    # # path for registration

    # path for login
    # path(route='login', view=views.login_user, name='login'),

    # path for dealer reviews view

    # path for add a review view
    # ... other paths
    path('about/', TemplateView.as_view(template_name="About.html")),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
