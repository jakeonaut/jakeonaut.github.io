from jinja2 import FileSystemLoader, Environment

template_dir = "./templates"
generated_dir = "."

# https://www.pydanny.com/jinja2-quick-load-function.html
def render_from_template(directory, template_name, **kwargs):
  loader = FileSystemLoader(directory)
  env = Environment(loader=loader)
  template = env.get_template(template_name)
  return template.render(**kwargs)

def generatePage(template_name, title, child_dir = ''):
  pageContent = render_from_template(
    template_dir + child_dir, template_name, **{})

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
  generatePage("glitchdungeon.html", "glitch dungeon", "/games")
  generatePage("goblin.html", "goblin catcher", "/games")
  generatePage("monkeyking.html", "the monkey king", "/games")
  generatePage("pixelpets.html", "pixel pets", "/games")
  generatePage("echoisland.html", "echo island", "/games")
  generatePage("gauntlet.html", "gauntlet of love", "/games")
  generatePage("dungeon.html", "dungeon of trials", "/games")

def generateMockupPages():
  generatePage("rgb.html", "rgb mockup", "/games")
  generatePage("musicquest.html", "music quest mockup", "/games")
  generatePage("summergame.html", "summer game mockup", "/games")
  generatePage("misc.html", "a bunch of other stuff", "/games")

def generateArtPage():
  generatePage("art.html", "visual art")

def generateAppsPage():
  generatePage("apps.html", "applications")

def main():
  generateIndex()
  generateGamesPage()
  generateMockupPages()
  generateArtPage()
  generateAppsPage()

main()