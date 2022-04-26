$(function () {
    let league = $('#leagues')
    let side = $('#sides')
    let champion = $('#champion')
    let playername = $('#player')
    let position = $('#position')
    let list = $('#list')

    buildSelectOption(league, leagues)
    buildSelectOption(side, sides)
    buildSelectOption(champion, champions)
    buildSelectOption(playername, players)
    buildSelectOption(position, positions)

    $('#search').on('click', function (e) {
        e.preventDefault()
        const query = $.param({
            league: league.val(),
            side: side.val(),
            champion: champion.val(),
            playername: playername.val(),
            position: position.val()
        })
        console.log(query)
        fetch(`http://localhost:5000/api/search?${query}`)
            .then(response => response.json())
            .then(response => {
                let rows = []
                if (response.result.length > 0 ){
                    list.html('')
                    rows = response.result.map( item => {
                        return `
                            <tr>
                                <td><a href="${item.url}">Link</a></td>   
                                <td>${item.playername}</td>   
                                <td>${item.league}</td>   
                                <td>${item.side}</td>   
                                <td>${item.position}</td>   
                                <td>${item.champion}</td>   
                                <td>${item.kda}</td>                            
                                <td>${item.result ? "Win" : "Loss"}</td>                            
                            </tr>
                            `
                    })
                    list.append(rows)
                }
                list.append(

                )
            })

    })

    function buildSelectOption(target, values) {
        let options = []
        options = values.map(item => `<option>${item}</option>`)
        options.unshift(`<option value="">Please Select an option</option>`)
        target.append(options)
    }

})

