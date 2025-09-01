from django import template
from django.utils.safestring import mark_safe

register = template.Library()

@register.filter
def seconds_to_hhmm(seconds):
    try:
        seconds = int(seconds)
        hours = seconds // 3600
        minutes = (seconds % 3600) // 60
        return f"{hours:02d}:{minutes:02d}"
    except (ValueError, TypeError):
        return "00:00"

@register.filter
def format_time_detailed(seconds):
    try:
        seconds = int(seconds)
        hours = seconds // 3600
        minutes = (seconds % 3600) // 60
        secs = seconds % 60
        
        if hours > 0:
            return f"{hours:02d}:{minutes:02d}:{secs:02d}"
        elif minutes > 0:
            return f"{minutes:02d}:{secs:02d}"
        else:
            return f"{secs:02d}s"
    except (ValueError, TypeError):
        return "00:00"
@register.filter
def seconds_to_days(seconds):
    """Convert seconds into days, hours, and minutes"""
    try:
        seconds = int(seconds)
        days = seconds // 86400
        hours = (seconds % 86400) // 3600
        minutes = (seconds % 3600) // 60
        
        if days > 0:
            return f"{days}d {hours}h:{minutes}m"
        elif hours > 0:
            return f"{hours}h:{minutes}m"
        else:
            return f"{minutes}m"
    except (ValueError, TypeError):
        return "0d 0h 0m"