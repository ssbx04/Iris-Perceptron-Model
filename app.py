from flask import Flask, request, render_template
import numpy as np
import joblib

app = Flask(__name__)

model = joblib.load('perceptron_model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    sepal_length = float(request.form['sepal_length'])
    petal_length = float(request.form['petal_length'])
    prediction = model[0] + model[1] * sepal_length + model[2] * petal_length  
    if prediction > 0 :
      return render_template('versicolor.html')
    else:
     return render_template('setosa.html')
if __name__ == '__main__':
    app.run(debug=True)

