


<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>jquery_lazyload/jquery.lazyload.js at master · tuupola/jquery_lazyload · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="tuupola/jquery_lazyload" name="twitter:title" /><meta content="jquery_lazyload - jQuery plugin for lazy loading images " name="twitter:description" /><meta content="https://avatars0.githubusercontent.com/u/21913?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars0.githubusercontent.com/u/21913?v=3&amp;s=400" property="og:image" /><meta content="tuupola/jquery_lazyload" property="og:title" /><meta content="https://github.com/tuupola/jquery_lazyload" property="og:url" /><meta content="jquery_lazyload - jQuery plugin for lazy loading images " property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

        <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5D9CE9D0:5BA8:10676D9D:55D4ECE4" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />
    <meta class="js-ga-set" name="dimension1" content="Logged Out">
      <meta class="js-ga-set" name="dimension4" content="Current repo nav">
    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <link rel="icon" sizes="any" mask href="https://assets-cdn.github.com/pinned-octocat.svg">
      <meta name="theme-color" content="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <!-- </textarea> --><!-- '"` --><meta content="authenticity_token" name="csrf-param" />
<meta content="uqQQel4PAtblaDI5Pm0OIbfHOFO+KhLsljEg7TJ7hA/9wntGj1FAyJODHLB3dTwNqdDhu4FnvoA57ESkix8GmQ==" name="csrf-token" />
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github/index-9f3b9b6f798e03419c34853e23b307439f59e850d54b1a6010a1533f084079d2.css" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2/index-e7ef318e52242411aa58941f39b0e5d44b0dab7132dc9a79a3bf09a4cf5b3dd8.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="7b8492dc7a9d8aa6dc4f0b0a30d9e60c">

      
  <meta name="description" content="jquery_lazyload - jQuery plugin for lazy loading images ">
  <meta name="go-import" content="github.com/tuupola/jquery_lazyload git https://github.com/tuupola/jquery_lazyload.git">

  <meta content="21913" name="octolytics-dimension-user_id" /><meta content="tuupola" name="octolytics-dimension-user_login" /><meta content="71972" name="octolytics-dimension-repository_id" /><meta content="tuupola/jquery_lazyload" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="71972" name="octolytics-dimension-repository_network_root_id" /><meta content="tuupola/jquery_lazyload" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/tuupola/jquery_lazyload/commits/master.atom" rel="alternate" title="Recent Commits to jquery_lazyload:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      



        
        <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Ftuupola%2Fjquery_lazyload%2Fblob%2Fmaster%2Fjquery.lazyload.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/tuupola/jquery_lazyload/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/tuupola/jquery_lazyload/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu ">
      <div class="container">

        <div class="clearfix">
          
<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Ftuupola%2Fjquery_lazyload"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/tuupola/jquery_lazyload/watchers">
    264
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Ftuupola%2Fjquery_lazyload"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/tuupola/jquery_lazyload/stargazers">
      4,521
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Ftuupola%2Fjquery_lazyload"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/tuupola/jquery_lazyload/network" class="social-count">
        1,184
      </a>
    </li>
</ul>

          <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
            <span class="mega-octicon octicon-repo"></span>
            <span class="author"><a href="/tuupola" class="url fn" itemprop="url" rel="author"><span itemprop="title">tuupola</span></a></span><!--
         --><span class="path-divider">/</span><!--
         --><strong><a href="/tuupola/jquery_lazyload" data-pjax="#js-repo-pjax-container">jquery_lazyload</a></strong>

            <span class="page-context-loader">
              <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
            </span>

          </h1>
        </div>

      </div>
    </div>

      <div class="container">
        <div class="repository-with-sidebar repo-container new-discussion-timeline ">
          <div class="repository-sidebar clearfix">
              

<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/tuupola/jquery_lazyload/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/tuupola/jquery_lazyload" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /tuupola/jquery_lazyload">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/tuupola/jquery_lazyload/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /tuupola/jquery_lazyload/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull requests">
      <a href="/tuupola/jquery_lazyload/pulls" aria-label="Pull requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /tuupola/jquery_lazyload/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/tuupola/jquery_lazyload/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /tuupola/jquery_lazyload/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/tuupola/jquery_lazyload/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /tuupola/jquery_lazyload/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

                <div class="only-with-full-nav">
                    
<div class="js-clone-url clone-url open"
  data-protocol-type="http">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/tuupola/jquery_lazyload.git" readonly="readonly" aria-label="HTTPS clone URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="js-clone-url clone-url "
  data-protocol-type="subversion">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/tuupola/jquery_lazyload" readonly="readonly" aria-label="Subversion checkout URL">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



  <div class="clone-options">You can clone with
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="a0be12705503c48f50e20bae6772e0a60c241633" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Q9+hygzcIsbtP6pQCCL7uaNVj22u0eAte2I0j71zDt1ReHfVX2CtankMr8BoAC6i9xZqgU3VAAnH6kh30a2kKw==" /></div><button class="btn-link js-clone-selector" data-protocol="http" type="submit">HTTPS</button></form> or <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone" class="inline-form js-clone-selector-form " data-form-nonce="a0be12705503c48f50e20bae6772e0a60c241633" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="wQvSpPOn9RiEwduVRknCd5U5fIYyYrxYiznyDvmzXZ3ZgdT9W3MYhKvla5Ra4iFXymOlWRLNt28M1JIZ8JBGJA==" /></div><button class="btn-link js-clone-selector" data-protocol="subversion" type="submit">Subversion</button></form>.
    <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
      <span class="octicon octicon-question"></span>
    </a>
  </div>
    <a href="https://windows.github.com" class="btn btn-sm sidebar-button" title="Save tuupola/jquery_lazyload to your computer and use it in GitHub Desktop." aria-label="Save tuupola/jquery_lazyload to your computer and use it in GitHub Desktop.">
      <span class="octicon octicon-desktop-download"></span>
      Clone in Desktop
    </a>

                  <a href="/tuupola/jquery_lazyload/archive/master.zip"
                     class="btn btn-sm sidebar-button"
                     aria-label="Download the contents of tuupola/jquery_lazyload as a zip file"
                     title="Download the contents of tuupola/jquery_lazyload as a zip file"
                     rel="nofollow">
                    <span class="octicon octicon-cloud-download"></span>
                    Download ZIP
                  </a>
                </div>
          </div>
          <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>

            

<a href="/tuupola/jquery_lazyload/blob/f82eee9f752a58fe5202b76adda2466fae2fd398/jquery.lazyload.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:34973a1e20694fec4063bfe3c56cee0c -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu js-menu-container js-select-menu left">
  <span class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/tuupola/jquery_lazyload/blob/1.8.x/jquery.lazyload.js"
               data-name="1.8.x"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.8.x">
                1.8.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/tuupola/jquery_lazyload/blob/1.9.x/jquery.lazyload.js"
               data-name="1.9.x"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="1.9.x">
                1.9.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/tuupola/jquery_lazyload/blob/master/jquery.lazyload.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.5/jquery.lazyload.js"
                 data-name="1.9.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.5">1.9.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.4/jquery.lazyload.js"
                 data-name="1.9.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.4">1.9.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.3/jquery.lazyload.js"
                 data-name="1.9.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.3">1.9.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.2/jquery.lazyload.js"
                 data-name="1.9.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.2">1.9.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.1/jquery.lazyload.js"
                 data-name="1.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.1">1.9.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.9.0/jquery.lazyload.js"
                 data-name="1.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0">1.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.5/jquery.lazyload.js"
                 data-name="1.8.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.5">1.8.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.4/jquery.lazyload.js"
                 data-name="1.8.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.4">1.8.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.3/jquery.lazyload.js"
                 data-name="1.8.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.3">1.8.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.2/jquery.lazyload.js"
                 data-name="1.8.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.2">1.8.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.1/jquery.lazyload.js"
                 data-name="1.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.1">1.8.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.8.0/jquery.lazyload.js"
                 data-name="1.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.8.0">1.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.7.2/jquery.lazyload.js"
                 data-name="1.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.2">1.7.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.7.1/jquery.lazyload.js"
                 data-name="1.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.1">1.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.7.0/jquery.lazyload.js"
                 data-name="1.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.7.0">1.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.6.0/jquery.lazyload.js"
                 data-name="1.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.6.0">1.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/tuupola/jquery_lazyload/tree/1.5.0/jquery.lazyload.js"
                 data-name="1.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.5.0">1.5.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="btn-group right">
      <a href="/tuupola/jquery_lazyload/find/master"
            class="js-show-file-finder btn btn-sm empty-icon tooltipped tooltipped-nw"
            data-pjax
            data-hotkey="t"
            aria-label="Quickly jump between files">
        <span class="octicon octicon-list-unordered"></span>
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </div>

    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/tuupola/jquery_lazyload" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">jquery_lazyload</span></a></span></span><span class="separator">/</span><strong class="final-path">jquery.lazyload.js</strong>
    </div>
  </div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="" class="avatar" height="24" src="https://0.gravatar.com/avatar/644b0042c3f62a2dc7a6fe4dda984215?d=https%3A%2F%2Fassets-cdn.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
        <span class="author"><span>Steve Norell</span></span>
        <time datetime="2015-04-02T12:07:33Z" is="relative-time">Apr 2, 2015</time>
        <div class="commit-title">
            <a href="/tuupola/jquery_lazyload/commit/ecf32fadbb1ca68b2981cb18e3333735ef39cb61" class="message" data-pjax="true" title="Use ! for comment preservation">Use ! for comment preservation</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>14</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="tuupola" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=tuupola"><img alt="@tuupola" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/21913?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="baynezy" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=baynezy"><img alt="@baynezy" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1049999?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robwalch" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=robwalch"><img alt="@robwalch" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/333258?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="silentmatt" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=silentmatt"><img alt="@silentmatt" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/21796?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mcNdave" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=mcNdave"><img alt="@mcNdave" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3297881?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Izzmo" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=Izzmo"><img alt="@Izzmo" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/229083?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="ifightcrime" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=ifightcrime"><img alt="@ifightcrime" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/616525?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="swiftyone" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=swiftyone"><img alt="@swiftyone" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/465094?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jpalardy" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=jpalardy"><img alt="@jpalardy" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/18142?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="girvan" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=girvan"><img alt="@girvan" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/843714?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="joseprio" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=joseprio"><img alt="@joseprio" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1651923?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="daviddurand" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=daviddurand"><img alt="@daviddurand" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1316941?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="bryanchow" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=bryanchow"><img alt="@bryanchow" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/31800?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="tygas" href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js?author=tygas"><img alt="@tygas" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/280071?v=3&amp;s=40" width="20" /> </a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="@tuupola" height="24" src="https://avatars2.githubusercontent.com/u/21913?v=3&amp;s=48" width="24" />
            <a href="/tuupola">tuupola</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@baynezy" height="24" src="https://avatars1.githubusercontent.com/u/1049999?v=3&amp;s=48" width="24" />
            <a href="/baynezy">baynezy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@robwalch" height="24" src="https://avatars3.githubusercontent.com/u/333258?v=3&amp;s=48" width="24" />
            <a href="/robwalch">robwalch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@silentmatt" height="24" src="https://avatars1.githubusercontent.com/u/21796?v=3&amp;s=48" width="24" />
            <a href="/silentmatt">silentmatt</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mcNdave" height="24" src="https://avatars3.githubusercontent.com/u/3297881?v=3&amp;s=48" width="24" />
            <a href="/mcNdave">mcNdave</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Izzmo" height="24" src="https://avatars0.githubusercontent.com/u/229083?v=3&amp;s=48" width="24" />
            <a href="/Izzmo">Izzmo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ifightcrime" height="24" src="https://avatars2.githubusercontent.com/u/616525?v=3&amp;s=48" width="24" />
            <a href="/ifightcrime">ifightcrime</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@swiftyone" height="24" src="https://avatars3.githubusercontent.com/u/465094?v=3&amp;s=48" width="24" />
            <a href="/swiftyone">swiftyone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jpalardy" height="24" src="https://avatars3.githubusercontent.com/u/18142?v=3&amp;s=48" width="24" />
            <a href="/jpalardy">jpalardy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@girvan" height="24" src="https://avatars1.githubusercontent.com/u/843714?v=3&amp;s=48" width="24" />
            <a href="/girvan">girvan</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@joseprio" height="24" src="https://avatars1.githubusercontent.com/u/1651923?v=3&amp;s=48" width="24" />
            <a href="/joseprio">joseprio</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@daviddurand" height="24" src="https://avatars3.githubusercontent.com/u/1316941?v=3&amp;s=48" width="24" />
            <a href="/daviddurand">daviddurand</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bryanchow" height="24" src="https://avatars0.githubusercontent.com/u/31800?v=3&amp;s=48" width="24" />
            <a href="/bryanchow">bryanchow</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@tygas" height="24" src="https://avatars0.githubusercontent.com/u/280071?v=3&amp;s=48" width="24" />
            <a href="/tygas">tygas</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-actions">

      <div class="btn-group">
        <a href="/tuupola/jquery_lazyload/raw/master/jquery.lazyload.js" class="btn btn-sm " id="raw-url">Raw</a>
          <a href="/tuupola/jquery_lazyload/blame/master/jquery.lazyload.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
        <a href="/tuupola/jquery_lazyload/commits/master/jquery.lazyload.js" class="btn btn-sm " rel="nofollow">History</a>
      </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-desktop-download"></span>
        </a>

          <button type="button" class="octicon-btn disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
            <span class="octicon octicon-pencil"></span>
          </button>

        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-n" aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </button>
    </div>

    <div class="file-info">
        243 lines (203 sloc)
        <span class="file-info-divider"></span>
      9.058 kB
    </div>
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*!</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Lazy Load - jQuery plugin for lazy loading images</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2007-2015 Mika Tuupola</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the MIT license:</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   http://www.opensource.org/licenses/mit-license.php</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Project home:</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   http://www.appelsiini.net/projects/lazyload</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Version:  1.9.5</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-smi">window</span>, <span class="pl-smi">document</span>, <span class="pl-smi">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> $window <span class="pl-k">=</span> $(<span class="pl-c1">window</span>);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$.fn</span>.<span class="pl-en">lazyload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> elements <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $container;</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> settings <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">            threshold       <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">            failure_limit   <span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">event</span>           <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>scroll<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">            effect          <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>show<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">            container       <span class="pl-k">:</span> <span class="pl-c1">window</span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">            data_attribute  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>original<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">            skip_invisible  <span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">            appear          <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">            load            <span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">            placeholder     <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">update</span>() {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> counter <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">            elements.<span class="pl-c1">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> $<span class="pl-v">this</span> <span class="pl-k">=</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (settings.<span class="pl-c1">skip_invisible</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>$<span class="pl-v">this</span>.<span class="pl-c1">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:visible<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ($.<span class="pl-c1">abovethetop</span>(<span class="pl-v">this</span>, settings) <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">                    $.<span class="pl-c1">leftofbegin</span>(<span class="pl-v">this</span>, settings)) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">/* Nothing. */</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>$.<span class="pl-c1">belowthefold</span>(<span class="pl-v">this</span>, settings) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">!</span>$.<span class="pl-c1">rightoffold</span>(<span class="pl-v">this</span>, settings)) {</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">                        $<span class="pl-v">this</span>.<span class="pl-c1">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>appear<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c">/* if we found an image we&#39;ll load, reset the counter */</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">                        counter <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">++</span>counter <span class="pl-k">&gt;</span> settings.<span class="pl-c1">failure_limit</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(options) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* Maintain BC for a couple of versions. */</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">undefined</span> <span class="pl-k">!==</span> options.<span class="pl-c1">failurelimit</span>) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">                options.<span class="pl-c1">failure_limit</span> <span class="pl-k">=</span> options.<span class="pl-c1">failurelimit</span>;</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">delete</span> options.<span class="pl-c1">failurelimit</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">undefined</span> <span class="pl-k">!==</span> options.<span class="pl-c1">effectspeed</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">                options.<span class="pl-c1">effect_speed</span> <span class="pl-k">=</span> options.<span class="pl-c1">effectspeed</span>;</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">delete</span> options.<span class="pl-c1">effectspeed</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">            $.<span class="pl-c1">extend</span>(settings, options);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Cache container as jQuery as object. */</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        $container <span class="pl-k">=</span> (settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">                      settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>) <span class="pl-k">?</span> $window <span class="pl-k">:</span> $(settings.<span class="pl-c1">container</span>);</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Fire one scroll event per scroll. Not one scroll event per image. */</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> settings.<span class="pl-c1">event</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>scroll<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">            $container.<span class="pl-c1">bind</span>(settings.<span class="pl-c1">event</span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">update</span>();</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        <span class="pl-v">this</span>.<span class="pl-c1">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> $self <span class="pl-k">=</span> $(self);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">            self.<span class="pl-c1">loaded</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* If no src attribute given use data:uri. */</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ($self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> $self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>) <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ($self.<span class="pl-c1">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">                    $self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, settings.<span class="pl-c1">placeholder</span>);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* When appear is triggered load original image. */</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">            $self.<span class="pl-c1">one</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>appear<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-c1">loaded</span>) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (settings.<span class="pl-c1">appear</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">var</span> elements_left <span class="pl-k">=</span> elements.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">                        settings.<span class="pl-c1">appear</span>.<span class="pl-c1">call</span>(self, elements_left, settings);</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">                    $(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;img /&gt;<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">                        .<span class="pl-c1">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>load<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">var</span> original <span class="pl-k">=</span> $self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> settings.<span class="pl-c1">data_attribute</span>);</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">                            $self.<span class="pl-c1">hide</span>();</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> ($self.<span class="pl-c1">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">                                $self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, original);</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">                            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">                                $self.<span class="pl-c1">css</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>background-image<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>url(&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> original <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">                            $self[settings.<span class="pl-c1">effect</span>](settings.<span class="pl-c1">effect_speed</span>);</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">                            self.<span class="pl-c1">loaded</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">                            <span class="pl-c">/* Remove image from array so it is not looped next time. */</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">var</span> temp <span class="pl-k">=</span> $.<span class="pl-c1">grep</span>(elements, <span class="pl-k">function</span>(<span class="pl-smi">element</span>) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">return</span> <span class="pl-k">!</span>element.<span class="pl-c1">loaded</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">                            });</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">                            elements <span class="pl-k">=</span> $(temp);</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                            <span class="pl-k">if</span> (settings.<span class="pl-c1">load</span>) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                                <span class="pl-k">var</span> elements_left <span class="pl-k">=</span> elements.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                                settings.<span class="pl-c1">load</span>.<span class="pl-c1">call</span>(self, elements_left, settings);</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                            }</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                        })</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                        .<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>src<span class="pl-pds">&quot;</span></span>, $self.<span class="pl-c1">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> settings.<span class="pl-c1">data_attribute</span>));</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* When wanted event is triggered load original image */</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">            <span class="pl-c">/* by triggering appear.                              */</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-c1">0</span> <span class="pl-k">!==</span> settings.<span class="pl-c1">event</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>scroll<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                $self.<span class="pl-c1">bind</span>(settings.<span class="pl-c1">event</span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (<span class="pl-k">!</span>self.<span class="pl-c1">loaded</span>) {</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                        $self.<span class="pl-c1">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>appear<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Check if something appears when window is resized. */</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        $window.<span class="pl-c1">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>resize<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">update</span>();</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* With IOS5 force loading images when navigating with back button. */</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Non optimal workaround. */</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> ((<span class="pl-sr"><span class="pl-pds">/</span>(?:iphone<span class="pl-k">|</span>ipod<span class="pl-k">|</span>ipad)<span class="pl-c1">.</span><span class="pl-k">*</span>os 5<span class="pl-pds">/</span>gi</span>).<span class="pl-c1">test</span>(<span class="pl-c1">navigator</span>.<span class="pl-c1">appVersion</span>)) {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">            $window.<span class="pl-c1">bind</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>pageshow<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">event</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-c1">event</span>.<span class="pl-c1">originalEvent</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">event</span>.<span class="pl-c1">originalEvent</span>.<span class="pl-c1">persisted</span>) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">                    elements.<span class="pl-c1">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">                        $(<span class="pl-v">this</span>).<span class="pl-c1">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>appear<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Force initial check if images should appear. */</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">        $(<span class="pl-c1">document</span>).<span class="pl-c1">ready</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">update</span>();</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* Convenience methods in jQuery namespace.           */</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* Use as  $.belowthefold(element, {threshold : 100, container : window}) */</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$</span>.<span class="pl-en">belowthefold</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fold;</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> (<span class="pl-c1">window</span>.<span class="pl-c1">innerHeight</span> <span class="pl-k">?</span> <span class="pl-c1">window</span>.<span class="pl-c1">innerHeight</span> <span class="pl-k">:</span> $window.<span class="pl-c1">height</span>()) <span class="pl-k">+</span> $window.<span class="pl-c1">scrollTop</span>();</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">offset</span>().<span class="pl-c1">top</span> <span class="pl-k">+</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fold <span class="pl-k">&lt;=</span> $(element).<span class="pl-c1">offset</span>().<span class="pl-c1">top</span> <span class="pl-k">-</span> settings.<span class="pl-c1">threshold</span>;</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$</span>.<span class="pl-en">rightoffold</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fold;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $window.<span class="pl-c1">width</span>() <span class="pl-k">+</span> $window.<span class="pl-c1">scrollLeft</span>();</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">offset</span>().<span class="pl-c1">left</span> <span class="pl-k">+</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fold <span class="pl-k">&lt;=</span> $(element).<span class="pl-c1">offset</span>().<span class="pl-c1">left</span> <span class="pl-k">-</span> settings.<span class="pl-c1">threshold</span>;</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$</span>.<span class="pl-en">abovethetop</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fold;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $window.<span class="pl-c1">scrollTop</span>();</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">offset</span>().<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fold <span class="pl-k">&gt;=</span> $(element).<span class="pl-c1">offset</span>().<span class="pl-c1">top</span> <span class="pl-k">+</span> settings.<span class="pl-c1">threshold</span>  <span class="pl-k">+</span> $(element).<span class="pl-c1">height</span>();</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$</span>.<span class="pl-en">leftofbegin</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fold;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">undefined</span> <span class="pl-k">||</span> settings.<span class="pl-c1">container</span> <span class="pl-k">===</span> <span class="pl-c1">window</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $window.<span class="pl-c1">scrollLeft</span>();</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">            fold <span class="pl-k">=</span> $(settings.<span class="pl-c1">container</span>).<span class="pl-c1">offset</span>().<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> fold <span class="pl-k">&gt;=</span> $(element).<span class="pl-c1">offset</span>().<span class="pl-c1">left</span> <span class="pl-k">+</span> settings.<span class="pl-c1">threshold</span> <span class="pl-k">+</span> $(element).<span class="pl-c1">width</span>();</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">$</span>.<span class="pl-en">inviewport</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">settings</span>) {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">         <span class="pl-k">return</span> <span class="pl-k">!</span>$.<span class="pl-c1">rightoffold</span>(element, settings) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>$.<span class="pl-c1">leftofbegin</span>(element, settings) <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">!</span>$.<span class="pl-c1">belowthefold</span>(element, settings) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>$.<span class="pl-c1">abovethetop</span>(element, settings);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">     };</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* Custom selectors for your convenience.   */</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* Use as $(&quot;img:below-the-fold&quot;).something() or */</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/* $(&quot;img&quot;).filter(&quot;:below-the-fold&quot;).something() which is faster */</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    $.<span class="pl-c1">extend</span>($.<span class="pl-c1">expr</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>], {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">below-the-fold</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> $.<span class="pl-c1">belowthefold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">above-the-top</span><span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span>$.<span class="pl-c1">belowthefold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">right-of-screen</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> $.<span class="pl-c1">rightoffold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">left-of-screen</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span>$.<span class="pl-c1">rightoffold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">in-viewport</span><span class="pl-pds">&quot;</span></span>    <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> $.<span class="pl-c1">inviewport</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        <span class="pl-c">/* Maintain BC for couple of versions. */</span></td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">above-the-fold</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span>$.<span class="pl-c1">belowthefold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">right-of-fold</span><span class="pl-pds">&quot;</span></span>  <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> $.<span class="pl-c1">rightoffold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); },</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">left-of-fold</span><span class="pl-pds">&quot;</span></span>   <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">a</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span>$.<span class="pl-c1">rightoffold</span>(a, {threshold <span class="pl-k">:</span> <span class="pl-c1">0</span>}); }</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">})(jQuery, <span class="pl-c1">window</span>, <span class="pl-c1">document</span>);</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

          </div>
        </div>
        <div class="modal-backdrop"></div>
      </div>
  </div>


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04238s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" aria-label=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-d57b85eb0208f46172d97d4746c78b19441b324803d3cc53d37e5a405f584b6d.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github/index-6a674366e1a2a508a2f63b74540b455873cc9feaa76663b11b7c47114c7b2c7b.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

