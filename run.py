from jinja2 import FileSystemLoader, Environment

template_dir = "./templates"
generated_dir = "."

# https://www.pydanny.com/jinja2-quick-load-function.html
def render_from_template(directory, template_name, **kwargs):
  loader = FileSystemLoader(directory)
  env = Environment(loader=loader)
  template = env.get_template(template_name)
  return template.render(**kwargs)

def generatePage(template_name, title):
  pageContent = render_from_template(template_dir, template_name, **{})
  final_data = { 
    "title": title, 
    "currentPage": title, 
    "pageContent": pageContent 
  }
  final_html = render_from_template(template_dir, "base.html", **final_data)

  # write to file
  f = open(template_name, 'w')
  f.write(final_html)
  f.close()

def generateIndex():
  generatePage("index.html", "jaketrower")

def generateGamesPage():
  generatePage("games.html", "games")

def generateArtPage():
  generatePage("art.html", "visual art")

def generateAppsPage():
  generatePage("apps.html", "applications")

def main():
  generateIndex()
  generateGamesPage()
  generateArtPage()
  generateAppsPage()

main()