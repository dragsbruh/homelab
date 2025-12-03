#!/usr/bin/env fish

set base_dir /srv/config/static
set sites (ls $base_dir)

echo "services:"

for s in $sites
    set path "$base_dir/$s"

    if test -d $path
        if test "$s" = "@"
            set domain "hearth.land"
            set domain_pub "hearth.is-a.dev"
            set name "static-hearth"
        else
            set domain "$s.hearth.land"
            set domain_pub "$s.hearth.is-a.dev"
            set name "static-$s"
        end

        echo "  $name:"
        echo "    image: busybox:latest"
        echo "    restart: unless-stopped"
        echo "    volumes:"
        echo "      - $path:/srv/http:ro"
        echo "    networks:"
        echo "      - public"
        echo '    command: ["httpd", "-f", "-p", "80", "-h", "/srv/http/"]'
        echo "    labels:"
        echo "      - \"traefik.enable=true\""
        echo "      - \"traefik.http.routers.$name.rule=Host(`$domain`)\""
        echo "      - \"traefik.http.services.$name.loadbalancer.server.port=80\""
        echo "      - \"traefik.http.routers.$name-public.rule=Host(`$domain_pub`)\""
        echo "      - \"traefik.http.routers.$name-public.entryPoints=cloudflare\""
    end
end
