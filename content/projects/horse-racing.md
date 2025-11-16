# Horse Racing Prediction ML Model

LightGBM ensemble achieving up to 8.7% edge relative to Betfair market odds through 68-feature engineering and Bayesian calibration methods. Implemented regularization techniques reducing overfit from 97.9% to 74.9% max confidence with calibration error <0.03.

## Key Components

- 68 engineered features covering form, sectional times, market moves, and jockey-trainer signals
- Bayesian calibration layer reducing overconfidence and improving log-loss stability
- Kelly Criterion staking overlays informed by calibrated probability outputs

## Performance Notes

> Language: Python — Updated MAR 2025

- Demonstrated 8.7% edge relative to Betfair closing odds
- Calibration error maintained below 0.03 after regularisation sweep
- Automated monitoring of model drift and re-training triggers
