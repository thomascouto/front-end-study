import React from 'react'

const Toggle = (props: ToggleProps) => {
  const [checked, setIsChecked] = React.useState(true)

  const toggleChecked = () => {
    setIsChecked(!checked)
  }

  return (
    <div
      className="theme-toggle shadow"
      role={'button'}
      onClick={toggleChecked}
    >
      <span className="sun" style={{ opacity: checked ? 0 : 1 }}>
        {props.emoji?.on ?? '☀️'}
      </span>
      <span className="moon" style={{ opacity: checked ? 1 : 0 }}>
        {props.emoji?.off ?? '🌜'}
      </span>
      <div
        className={`theme-toggle__ball theme-toggle__ball__${
          checked ? 'checked' : 'unchecked'
        }`}
      ></div>
    </div>
  )
}

export default Toggle
