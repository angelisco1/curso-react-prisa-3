import React from 'react'

export const withHover = (WrappedCmp) => {
  return class CmpWithHover extends React.Component {
    render() {
      return (
        <div className="with-hover">
          <WrappedCmp {...this.props} />
        </div>
      )
    }
  }
}