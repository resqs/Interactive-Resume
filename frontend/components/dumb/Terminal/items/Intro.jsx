import React from 'react'
import TerminalItem from './Item'


export const Intro = ({data}) => {

	const {
		welcomeMessage,
		commands,
		example,
		ps
	} = data.value

	const cList = commands.map( (cObj, index) =>
		<article key={index} className='flex-row'>
			<div className='cell md'>[{cObj.name}]</div>
			<div className='cell fill'>{cObj.info}</div>
		</article>
	)

	return (
		<TerminalItem command={data.command}>
			<section className='result-area'>
				<pre className='ascii-art'>
					{`
          ....,,
        .::o::;'          .....
       ::::::::        .::::o:::.,
      .::' \`:::        :::::::
      :::     :       ::'   \`.
     .:::     :       :'      ::
    .:::       :     ,:       \`::
   .' :        :\`. ." :        :::
  .' .:        :  :  .:        : :
  : ::'   D    ::. :' :    B   : :
  :: :         :\`: :  :        :\`:
  :  :         :  ''  :        : '
_.---:         :___   :        :
     :        :\`   \`--:        :
     : :---: :        : :---: :\`---.
      '\`\`\`  '\`\`\`      '''   ''''
					`}
				</pre>

				<p>
					{welcomeMessage}
				</p>

				<h4>
					COMMANDS:
				</h4>

				{cList}

				<h4>
					EXAMPLE:
				</h4>

				<div className='flex-row'>
					<p>{example.instruction}</p>
				</div>

				<div className='flex-row'>
					<p>{example.command}</p>
				</div>

				<h4>
					PS:
				</h4>

				<p>{ps}</p>
			</section>
		</TerminalItem>
	)
}
