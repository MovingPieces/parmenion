module Jekyll
  class PlaceholdTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      text = text.strip
      @text = text
      regex = /^\d+x\d+$/
      unless regex.match?(text)
        raise "invalid placehold.it resolution. Got #{text}, expected 12x321 format"
      end
    end

    def scheme(context)
      context.registers[:site].config["placehold_scheme"] || "http"
    end

    def render(context)
      "#{scheme(context)}://placehold.it/#{@text}"
    end
  end
end

Liquid::Template.register_tag('placehold', Jekyll::PlaceholdTag)
