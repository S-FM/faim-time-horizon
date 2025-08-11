# FAIM - Foundation AI Models for structured data

## Project info

**Live Site**: https://faim.it.com

## How can I edit this code?

**Use your preferred IDE**

You can work locally using your own IDE and push changes to deploy automatically.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project automatically deploys to GitHub Pages when you push changes to the main branch.

1. Make your changes
2. Commit and push:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. GitHub Actions will build and deploy automatically
4. Your changes will be live at https://faim.it.com in ~2-5 minutes

## Python Client for Time Series Forecasting

The FAIM models can be accessed programmatically using the `tsfm-client` Python package, which provides a convenient interface for time series forecasting with foundation models.

### Installation

```bash
pip install tsfm-client
```

### Requirements

- Python >= 3.10
- Valid TSFM API key
- Dependencies: numpy, pandas, httpx, pydantic

### Basic Usage

```python
import os
import numpy as np
from tsfm_client import TSFMClient

# Set your API key
os.environ['TSFM_API_KEY'] = 'your_api_key_here'
client = TSFMClient(api_key=os.getenv('TSFM_API_KEY'))

# Prepare your time series data
data = np.array([10, 12, 13, 15, 17, 16, 18, 20, 22, 25])

# Generate forecasts with confidence intervals
response = client.predict(
    data=data,
    forecast_horizon=5,  # Predict next 5 time steps
    num_samples=100,     # Number of samples for confidence intervals
    confidence_intervals=[0.8, 0.95]  # 80% and 95% confidence intervals
)

# Access the results
print("Forecasts:", response.forecasts)
print("Confidence intervals:", response.confidence_intervals)
```

### Supported Models

- **chronos-t5-small**: Optimized for quick predictions
- **toto-open-base-1.0**: Advanced model for complex time series

### Input Formats

The client supports multiple input formats:
- NumPy arrays
- Python lists
- Pandas Series (univariate)
- Pandas DataFrame (multivariate)

### Features

- ✅ Univariate and multivariate time series forecasting
- ✅ Confidence interval generation
- ✅ Multiple forecast horizons
- ✅ Foundation model-based predictions
- ✅ Easy integration with existing Python workflows

## Domain Configuration

This project is configured with a custom domain (faim.it.com) pointing to GitHub Pages with automatic HTTPS.
