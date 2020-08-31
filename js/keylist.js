let keylist = [
    ['Backspace', 'Backspace', '8'],
    ['Tab', 'Tab', '9'],
    ['Enter', 'Enter<br/>NumpadEnter', '13'],
    ['Shift', 'ShiftLeft<br/>ShiftRight', '16'],
    ['Control', 'ControlLeft<br/>ControlRight', '17'],
    ['Alt', 'AltLeft<br/>AltRight', '18'],
	['Pause', 'Pause', '19'],
    ['CapsLock', 'CapsLock', '20'],

    [' ', 'Space', '32'],
    ['PageUp', 'PageUp<br/>Numpad9', '33'],
    ['PageDown', 'PageDown<br/>Numpad3', '34'],
    ['End', 'End<br/>Numpad1', '35'],
    ['Home', 'Home<br/>Numpad7', '36'],
    ['ArrowLeft', 'ArrowLeft<br/>Numpad4', '37'],
    ['ArrowUp', 'ArrowUp<br/>Numpad8', '38'],
    ['ArrowRight', 'ArrowRight<br/>Numpad6', '39'],
    ['ArrowDown', 'ArrowDown<br/>Numpad2', '40'],

    ['PrintScreen', 'PrintScreen', '44'],
    ['Insert', 'Insert<br/>Numpad0', '45'],
    ['Delete', 'Delete<br/>NumpadDecimal', '46'],

    ['0<br/>)', 'Digit0', '48'],
    ['1<br/>!', 'Digit1', '49'],
    ['2<br/>@<br/>"', 'Digit2', '50'],
    ['3<br/>#<br/>№', 'Digit3', '51'],
    ['4<br/>$<br/>;', 'Digit4', '52'],
    ['5<br/>%', 'Digit5', '53'],
    ['6<br/>^<br/>:', 'Digit6', '54'],
    ['7<br/>&<br/>?', 'Digit7', '55'],
    ['8<br/>*', 'Digit8', '56'],
    ['9<br/>(', 'Digit9', '57'],

    ['a<br/>A', 'KeyA', '65'],
    ['b<br/>Q', 'KeyB', '66'],
    ['c<br/>Q', 'KeyC', '67'],
    ['d<br/>Q', 'KeyD', '68'],
    ['e<br/>Q', 'KeyE', '69'],
    ['f<br/>Q', 'KeyF', '70'],
    ['g<br/>Q', 'KeyG', '71'],
    ['h<br/>Q', 'KeyH', '72'],
    ['i<br/>Q', 'KeyI', '73'],
    ['j<br/>Q', 'KeyJ', '74'],
    ['k<br/>Q', 'KeyK', '75'],
    ['l<br/>Q', 'KeyL', '76'],
    ['m<br/>Q', 'KeyM', '77'],
    ['n<br/>Q', 'KeyN', '78'],
    ['o<br/>Q', 'KeyO', '79'],
    ['p<br/>Q', 'KeyP', '80'],
    ['q<br/>Q', 'KeyQ', '81'],
    ['r<br/>Q', 'KeyR', '82'],
    ['s<br/>Q', 'KeyS', '83'],
    ['t<br/>Q', 'KeyT', '84'],
    ['u<br/>Q', 'KeyU', '85'],
    ['v<br/>Q', 'KeyV', '86'],
    ['w<br/>Q', 'KeyW', '87'],
    ['x<br/>Q', 'KeyX', '88'],
    ['y<br/>Y', 'KeyY', '89'],
    ['z<br/>Z', 'KeyZ', '90'],
    ['Meta', 'MetaLeft', '91'],

    ['0', 'Numpad0', '96'],
    ['1', 'Numpad1', '97'],
    ['2', 'Numpad2', '98'],
    ['3', 'Numpad3', '99'],
    ['4', 'Numpad4', '100'],
    ['5', 'Numpad5', '101'],
    ['6', 'Numpad6', '102'],
    ['7', 'Numpad7', '103'],
    ['8', 'Numpad8', '104'],
    ['9', 'Numpad9', '105'],
    ['*', 'NumpadMultiply', '106'],
    ['+', 'NumpadAdd', '107'],


    ['-', 'NumpadSubstract', '109'],

    ['/', 'NumpadDivide', '111'],
    ['F1', 'F1', '112'],
    ['F2', 'F2', '113'],
    ['F3', 'F3', '114'],
    ['F4', 'F4', '115'],
    ['F5', 'F5', '116'],
    ['F6', 'F6', '117'],
    ['F7', 'F7', '118'],
    ['F8', 'F8', '119'],
    ['F9', 'F9', '120'],
    ['F10', 'F10', '121'],
    ['F11', 'F11', '122'],
    ['F12', 'F12', '123'],

    ['NumLock', 'NumLock', '144'],

    ['AudioVolumeMute', 'AudioVolumeMute', '173'],
    ['AudioVolumeDown', 'AudioVolumeDown', '174'],
    ['AudioVolumeUp', 'AudioVolumeUp', '175'],
    ['MediaTrackNext', 'MediaTrackNext', '176'],
    ['MediaTrackPrevious', 'MediaTrackPrevious', '177'],
    ['MediaPlayPause', 'MediaPlayPause', '179'],
    
    [';<br/>:', 'Semicolon', '186'],
    ['=<br/>+', 'Equal', '187'],
    [',<br/><', 'Comma', '188'],
    ['-<br/>_', 'Minus', '189'],
    ['.<br/>>', 'Period', '190'],
    ['/<br/>?', 'Slash', '191'],
    ['`<br/>~', 'Backquote', '192'],

    ['\\<br/>|', 'Backslash', '220'],
    ['\'<br/>"', 'Quote', '222'],

    ['Unidentified', '', '255'],
];

/*
            <tr><td>0<br/>)</td><td>Digit0</td><td>48</td></tr>
            <tr><td>1<br/>!</td><td>Digit1</td><td>49</td></tr>
            <tr><td>2<br/>@<br/>"</td><td>Digit2</td><td>50</td></tr>
            <tr><td>3<br/>#<br/>№</td><td>Digit3</td><td>51</td></tr>
            <tr><td>4<br/>$<br/>;</td><td>Digit4</td><td>52</td></tr>
            <tr><td>5<br/>%</td><td>Digit5</td><td>53</td></tr>
            <tr><td>6<br/>^<br/>:</td><td>Digit6</td><td>54</td></tr>
            <tr><td>7<br/>&<br/>?</td><td>Digit7</td><td>55</td></tr>
            <tr><td>8<br/>*</td><td>Digit8</td><td>56</td></tr>
            <tr><td>9<br/>(</td><td>Digit9</td><td>57</td></tr>

            <tr><td>Meta</td><td>MetaLeft</td><td>91</td></tr>

            <tr><td>=<br/>+</td><td>Equal</td><td>187</td></tr>
            <tr><td>-<br/>_</td><td>Minus</td><td>189</td></tr>

            <tr><td>Unidentified</td><td></td><td>255</td></tr>
*/