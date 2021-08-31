import React, { Component } from 'react'
import styled from 'styled-components'
// import Card from './Card'

class Sidebar extends Component {
  render() {
    const {repo} = this.props
    return (
     <div className="m-3">
       <img style={{"height":"auto"}} alt="" width="260" height="260" className="avatar avatar-user width-full border color-bg-primary" src="https://avatars.githubusercontent.com/u/40119007?v=4"></img>
       <div class="vcard-names-container float-left js-profile-editable-names col-12 py-3 js-sticky js-user-profile-sticky-fields" data-original-top="0px" style={{"position": "sticky"}}>
            <h1 class="vcard-names ">
                <span class="p-name vcard-fullname d-block overflow-hidden" itemprop="name">
                Karanjot Singh
                </span>
                <span class="p-nickname vcard-username d-block" itemprop="additionalName">
                Karanjot1995
                </span>
            </h1>
        </div>
        <div class="js-profile-editable-area d-flex flex-column d-md-block">
        <div class="p-note user-profile-bio mb-3 js-user-profile-bio f4" data-bio-text="" hidden=""></div>
            <div class="mb-3">
                <button name="button" type="button" className="btn btn-secondary btn-block js-profile-editable-edit-button" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:40119007,&quot;target&quot;:&quot;INLINE_EDIT_BUTTON&quot;,&quot;user_id&quot;:40119007,&quot;originating_url&quot;:&quot;https://github.com/Karanjot1995?tab=repositories&amp;_pjax=%23js-pjax-container&quot;}}" data-hydro-click-hmac="7d7288b0313d3c4c5af91abf214cf93c37bd90f1f256bf1a81f40b4d538092a8">Edit profile</button>
            </div>
            <ul class="vcard-details">
                <li itemprop="email" aria-label="Email: karan.nanda97@gmail.com" class="vcard-detail pt-1 css-truncate css-truncate-target "><svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
                    <a class="u-email Link--primary " href="mailto:karan.nanda97@gmail.com">karan.nanda97@gmail.com</a>
                </li>
            </ul>
        </div>
     </div>
    )
  }
}

export default Sidebar