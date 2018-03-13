module ApplicationHelper
  def render_component(element: :div, hook:, props: {})
    content_tag(element, "", data: {
                               behavior: hook,
                               props: props.to_json
                             })
  end
end
