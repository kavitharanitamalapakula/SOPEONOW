# SOPEONOW - Hospital Reporting Dashboard

A Django-based web application for hospital reporting and dashboard visualization, providing real-time insights into patient flow, triage statistics, and doctor performance metrics.

## Features

- **Real-time Dashboard**: Live monitoring of hospital operations
- **Patient Flow Tracking**: Registration to discharge time analysis
- **Triage Statistics**: Zone-based patient categorization and timing
- **Doctor Performance**: Individual doctor statistics and consultation times
- **Interactive Charts**: ApexCharts-powered visualizations
- **Responsive Design**: Mobile and tablet optimized interface
- **Data Tables**: Searchable doctor statistics table

## Prerequisites

- Python 3.8 or higher
- Django 4.0 or higher
- pip (Python package manager)

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd /path/to/SOPEONOW
   ```

2. **Create a virtual environment** (recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install django
   ```

4. **Apply database migrations** (if needed):
   ```bash
   python manage.py migrate
   ```

5. **Ensure data file is in place**:
   - The application expects `media/reporting_data.json` to contain the dashboard data
   - If the file doesn't exist, create it with the required JSON structure

## Running the Application

1. **Start the Django development server**:
   ```bash
   python manage.py runserver
   ```

2. **Access the dashboard**:
   - Open your web browser
   - Navigate to: `http://127.0.0.1:8000/`

## Configuration

### Settings

Key settings in `SOPEONOW/settings.py`:
- `MEDIA_ROOT`: Points to the `media/` directory for data files
- `INSTALLED_APPS`: Includes the `Reporting` app

## Usage

1. **Dashboard Overview**:
   - Left panel: Key metrics and visit summaries
   - Right panel: Zone statistics, charts, and waiting status
   - Bottom: Doctor statistics table

2. **Charts**:
   - Triage by Interval: Shows triage completion over time
   - Triage by Zone: Zone-wise patient distribution
   - Patients by Interval: Patient visits over time periods
   - Patients by Doctor: Doctor-wise consultation statistics

3. **Responsive Design**:
   - Desktop: Full layout
   - Tablet: Adjusted grid and heights
   - Mobile: Single column layout with vh-based heights

## Technologies Used

- **Backend**: Django (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Charts**: ApexCharts.js
- **Data Tables**: DataTables.js
- **Icons**: Font Awesome
- **Styling**: Custom CSS with responsive design


## License

This project is licensed under the MIT License - see the LICENSE file for details.

