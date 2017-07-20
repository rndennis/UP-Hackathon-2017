import React, {Component} from 'react'

import './Footer.css';

const emojis = [
  'ʕ•ᴥ•ʔ',
  '¯\\_(ツ)_/¯',
  'ಠ_ಠ',
  '(ᵔᴥᵔ)',
  '(◕‿◕✿)',
  '(☞ﾟ∀ﾟ)☞',
  '(☞ﾟヮﾟ)☞ ☜(ﾟヮﾟ☜)',
  '♪~ ᕕ(ᐛ)ᕗ',
  '(╯°□°）╯︵ ┻━┻',
  '（╯°□°）╯︵( .o.)',
  '(｡◕‿◕｡)',
  '｡◕‿‿◕｡',
  '( ಠ ͜ʖರೃ)',
  '(°ロ°)☝',
  '｡◕‿◕｡',
  '┬─┬ノ( º _ ºノ)',
  '┬─┬﻿ ︵ /(.□. ）',
  '༼ つ ◕_◕ ༽つ'
];

class Footer extends Component {
  getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  render() {
    return (
      <div className="Footer">
        <p>{`made by ${this.getRandomEmoji()}`}</p>
      </div>
    );
  }
}

export default Footer;