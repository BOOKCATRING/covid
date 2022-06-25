from flask import Flask, render_template, jsonify
import utils

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here
    # return 'HellodddWorld!'
    # return covid_main()
    return index()

@app.route('/main')
def covid_main():  # put application's code here
    return render_template("main.html")

@app.route('/time')
def get_time():  # put application's code here
    return utils.get_time()

@app.route('/getMapData')
def get_map_data():  # put application's code here
    res = utils.get_map_data()
    return jsonify({"data":res})

@app.route('/index')
def index():  # put application's code here
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
