var countCarrot = 0;
            var countWood = 0;
            var countStone = 0;
            var countStick = 0;

            var isPaused = false;

            var inventory = {
                carrot: {
                    displayName: 'Carrot: ',
                    count: 0,
                    status: 'active',
                    isPaused: false,
                    display: document.getElementById('disp1'),
                    toggle: document.getElementById('tog1'),
                    factory: document.getElementById('fact1'),
                    time: 500, 
                    image: '/tiles/tile293.png',
                    factoryCost: 10
                },
                wood: {
                    displayName: 'Wood: ',
                    count: 0,
                    status: 'active',
                    isPaused: false,
                    display: document.getElementById('disp2'),
                    toggle: document.getElementById('tog2'),
                    factory: document.getElementById('fact2'),
                    time: 1500,
                    image: '/tiles/tile293.png',
                    factoryCost: 50
                },
                stone: {
                    displayName: 'Stone: ',
                    count: 0,
                    status: 'active',
                    isPaused: false,
                    display: document.getElementById('disp3'),
                    toggle: document.getElementById('tog3'),
                    factory: document.getElementById('fact3'),
                    time: 3000,
                    image: '/tiles/tile293.png',
                    factoryCost: 50
                },
                stick: {
                    displayName: 'Stick: ',
                    count: 0,
                    status: 'active',
                    isPaused: false,
                    display: document.getElementById('disp4'),
                    toggle: document.getElementById('tog4'),
                    factory: document.getElementById('fact4'),
                    time: 1000,
                    image: '/tiles/tile293.png',
                    factoryCost: 50
                }
        
            };

            function updateDisplay(localItem) {
                localItem.display.innerHTML = (localItem.displayName + localItem.count);
            }

            function toggle(item) {
                localItem = eval('inventory.' + item);
                if(localItem.isPaused != true) {
                    localItem.isPaused = true;
                    localItem.toggle.innerHTML = 'Play';
                } else if(localItem.isPaused != false) {
                    localItem.isPaused = false;
                    localItem.toggle.innerHTML = 'Pause';
                }
            }

            function add(localItem) {
                if(typeof(localItem) != 'object') {
                    localItem = eval('inventory.' + localItem);
                }
                localItem.count++;
                updateDisplay(localItem);
                factoryCheck(localItem);
            }

            function factoryCheck(localItem) {
                if(localItem.count >= localItem.factoryCost) {
                    localItem.factory.classList.add('w3-green');
                    localItem.factory.classList.remove('w3-grey');
                } else {
                    localItem.factory.classList.add('w3-grey');
                    localItem.factory.classList.remove('w3-green');
                }
            }

            function startItem(item) {
                localItem = eval('inventory.' + item);
                if(localItem.factoryCost <= localItem.count) {
                    localItem.count = (localItem.count - localItem.factoryCost);
                    factoryCheck(localItem);
                    localItem.count++;
                    updateDisplay(localItem);
                    setInterval(function(item) {
                        localItem = eval('inventory.' + item);
                        if(!localItem.isPaused) {
                            add(localItem);
                        }
                    }, localItem.time, item);
                }
            }