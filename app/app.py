import json
import sqlite3

from flask import Flask, jsonify, request, Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

todos = [{
    "id": 1,
    "title": 'todo1',
    "completed": True
}, {
    "id": 2,
    "title": 'todo2',
    "completed": False
}]

dbname = "data.db"


def to_response(data, message, code):
    response = {
        "result": data,
        "error": None,
        "message": message
    }
    return Response(json.dumps(response), status=code, mimetype="application/json")


def to_error_response(error, message, code=500):
    response = {
        "result": None,
        "error": error,
        "message": message
    }
    return Response(json.dumps(response), status=code, mimetype="application/json")


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/api/search', methods=['GET'])
def get_match_list():
    where = "where 1"
    list = []
    args = request.args
    args.to_dict()
    for key in args:
        if args.get(key) != "":
            where = where + " and " + key + "=" + repr(args.get(key))

    query = "select * from `2019_match_data` " + where + " limit 100"
    print(query)

    with sqlite3.connect(dbname) as conn:
        conn.row_factory = access_fields_by_name
        for row in conn.execute(query).fetchall():
            list.append({
                "id": row['id'],
                "gameid": row['gameid'],
                "side": row['side'],
                "url": row['url'],
                "league": row['league'],
                'position': row['position'],
                'playername': row['playername'],
                'teamname': row['teamname'],
                'champion': row['champion'],
                'kda': str(row['kills']) + "/" + str(row['deaths']) + "/" + str(row["assists"]),
                'result': row['result']
            })
    return to_response(list, "todo list loaded", 200)


def quote(string):
    return


def access_fields_by_name(cursor, row):
    """ `row_factory` function to access fields by name. """
    header = [field[0].lower() for field in cursor.description]
    return {name: value for name, value in zip(header, row)}


if __name__ == '__main__':
    app.run()
