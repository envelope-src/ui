
conf= $(wildcard component.json lib/*/component.json)
src= $(wildcard lib/*/*.js)
html= $(wildcard lib/*/*.html)
styl= $(wildcard lib/*/*.styl)
css= $(styl:.styl=.css)
tpls= $(html:.html=.js)

build: components $(src) $(tpls) $(css)
	@component build --dev

components: $(conf)
	@component install --dev

%.js: %.html
	@component convert $<

%.css: %.styl
	@node bin/rework.js < $< > $@

clean:
	rm -rf components build $(tpls)

.PHONY: clean
