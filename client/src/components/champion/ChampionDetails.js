/** @format */

import React from 'react';

import Header from './details/DetailHeader';
import Type from './details/Type';
import Desc from './details/Description';
import Skill from './details/Skill';
import Rune from './details/Rune';
import Spell from './details/Spell';
import Equipment from './details/Equipment';
import Clothes from './details/Clothes';

function ChampionDetails(data) {
  const info = data.info;
  const clothes = data.details.clothes;
  const skills = data.details.skills;
  const skills_pr = data.details.skills_pr;
  const runes = data.details.runes;
  const types = data.details.types;
  const spells = data.details.spells;
  const equips = data.details.equips;

  return (
    <div className='detailContainer'>
      {/* 英雄頭像&名字 */}
      <Header name={info.cName} nameEng={info.cName_eng} headerImg={info.img} />
      {/* 英雄種類&背景 */}
      <div
        className='container col-xl-10 col-xxl-8 px-4 py-5'
        style={{ position: 'relative', top: '-120px' }}
      >
        <div className='row align-items-center g-5 py-5'>
          {/* 英雄背景 */}
          <Desc desc={info.desc} />
          {/* 英雄種類 */}
          <Type types={types} />
        </div>
      </div>
      {/* 英雄技能 */}
      <Skill skills={skills} skills_pr={skills_pr} />
      {/* 符文及召喚師技能 */}
      <div
        className='container col-xl-10 col-xxl-8 px-4'
        style={{ top: 'inherit' }}
      >
        <div className='row align-items-center g-5 runeSpellContainer'>
          <Spell spells={spells} />
          <div className='col-lg-1 h-100 p-5 rounded-3'></div>
          <Rune runes={runes} />
        </div>
      </div>
      {/* 裝備 */}
      <div className='container col-xl-10 col-xxl-8 px-4 '>
        <Equipment equips={equips} />
      </div>
      {/* 英雄造型 */}
      <Clothes clothes={clothes} />
    </div>
  );
}

export default ChampionDetails;
